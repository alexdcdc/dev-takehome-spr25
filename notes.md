# Checklist

<!-- Make sure you fill out this checklist with what you've done before submitting! -->

- [x] Read the README [please please please]
- [x] Something cool!
- [ ] Back-end
  - [ ] Minimum Requirements
    - [x] Setup MongoDB database
    - [ ] Setup item requests collection
    - [ ] `PUT /api/request`
    - [ ] `GET /api/request?page=_`
  - [ ] Main Requirements
    - [ ] `GET /api/request?status=pending`
    - [ ] `PATCH /api/request`
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