#!/usr/bin/env ruby

# gem 'pivotal-tracker'
require 'pivotal-tracker'

TRACKER_TOKEN = "$TRACKER_ACCOUNT_TOKEN"
TRACKER_PROJECT_ID = "1521279"

PivotalTracker::Client.token = TRACKER_TOKEN
PivotalTracker::Client.use_ssl = true

unpakt_project = PivotalTracker::Project.find(TRACKER_PROJECT_ID)
stories = unpakt_project.stories.all(:state => "finished", :story_type => ['bug', 'feature'])

staging_deploy_tag = `git tag | grep staging | tail -n1`

stories.each do | story |
  puts "Searching for #{story.id} in local git repo."
  search_result = `git log --grep #{story.id} #{staging_deploy_tag}`
  if search_result.length > 0
    puts "Found #{story.id}, marking as delivered."
    story.notes.create(:text => "Delivered by staging deploy script.")
    story.update({"current_state" => "delivered"})
  else
    puts "Coult not find #{story.id} in git repo."
  end
end
