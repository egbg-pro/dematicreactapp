# Setup
Once pulled, install the dependencies and execute "npm run dev" and you should be good to go.

# Design
Went for a basic table structure with some Bootstrap and custom styling. Left the actions (Edit and Delete) to be easily recognisable icons for usability. Both will open a modal component to process their intended updates.

Validation is implemented within the Table component and propogated to each of the field components within the Modal Form:
ID is required to be positive and unique.
Prompt and Stage are required and will provide error notes if blank.

Table has sorting if clicked on the header of the column.

# Assumptions
The ID field should be unique and no records should share an ID.
Table should be easily customisable with columns and content, hence splitting the head and body into separate components from the Table for plug and play.

# Challenges
With more time I would focus on implementing pagination.
