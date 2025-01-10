# Checklist

<!-- Make sure you fill out this checklist with what you've done before submitting! -->

- [x] Read the README [please please please]
- [x] Something cool!
- [x] Back-end
  - [x] Minimum Requirements
    - [x] Setup MongoDB database
    - [x] Setup item requests collection
    - [x] `PUT /api/request`
    - [x] `GET /api/request?page=_`
  - [x] Main Requirements
    - [x] `GET /api/request?status=pending`
    - [x] `PATCH /api/request`
  - [ ] Above and Beyond
    - [ ] Batch edits
    - [ ] Batch deletes
- [ ] Front-end
  - [ ] Minimum Requirements
    - [ ] Dropdown component
    - [ ] Table component
    - [ ] Base page [table with data]
    - [ ] Table dropdown interactivity
  - [ ] Main Requirements
    - [ ] Pagination
    - [ ] Tabs
  - [ ] Above and Beyond
    - [ ] Batch edits
    - [ ] Batch deletes

# Notes

<!-- Notes go here -->
- I made various modifications/additions within the /lib directory:
  - Added /lib/mongo and created various utilities and models for interacting w/ MongoDB via the Mongoose ORM
  -  Added an additional ResponseType in /lib/types/apiResponses.ts for 404 (Not Found) responses
- The project uses environment variables. These will be provided in the Google Form application.
- MongoDB should be configured correctly to accept connections as long as it has the correct environment variables. If this does not work, please contact me at achen680@gatech.edu.