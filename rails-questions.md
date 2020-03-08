# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - an http verb we use to order the server to retreive what is in the url
library - url
:id - param
book - name of controller
show - name of method

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

use migrate: 
- execute 'rails generate migration add_foreign_key_column' in terminal
- inside the migration folder, find the most recent migration file. inside the def change function, put in 'add_column :model_plural, :model_id, :integer' (switch 'model' into the actual model name)
- execute 'rails db:migrate' in terminal



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:integer pants:integer shoes:integer



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

inside the person.rb file, and inside the Person class, put in:
- 'validates :shirt, :pants, :shoes, presence: true'