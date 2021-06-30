# LinkedIn referrer a.k.a Refurr.

This project is built with React, HarperDB, and Tailwind.

## Reason behind building this project

When recruiters approach us with potential job opportunities, if we are not in the job market right now, it will be helpful if we can refer someone else within our linkedin connections to recruiters. We never know, one such referral may end up in a job / career change. We say, "hey i will loop the JD through my network and if anyone within our network is available, I'd loop them back to you." - But this may be a tedious process. Moreover, we may forget to follow up ourselves. 
Profiles usually contain personal information like emails / phone numbers which is sensitive information and need not be collected or shared without consent. That's why refurr asks only your linkedin profile URL. If you are a professional looking for jobs, a LinkedIn profile is a must have. So just provide your linkedin profile Url and let recruiters take a look at your profile and reach out to them. 

## Stack

The stack used is React, Tailwind, and harperDB 

## Features 

Two modes - Recruiter login as well as Candiate login ( via harper db )
- In recruiter login, we get to see the home page as well as profile page - Thats what matters to recruiters
- In candidate mode, we can see extra links for registration
- We have one more link for direct Uploads. We can have the data in a CSV and can be directly populated to the data base if we like bulk uploads. 
- Recruiters get to download the profiles as excel (csv ) if they wish to. 
- The only input that we ask is pretty basic - Your name, your skillsets and linkeidn profile URL. Thats it!
- We do not collect any personal information / neither shares them with anyone. ( After all, I am on a free plan ;) )

## Further feature add-ons projected 

- Deletion of profiles based on user logins 
- Upload word / pdf resumes 
- PWA to add Home page icons and offline caches
- Batch deletion of profiles after a certain time periods. ( say 90 days )
- Integration with Linkedin API to fetch more details to be displayed in the profile section including Profile pic. 

## Screenshots

Home Page 

![REFER CANDIDATES](https://user-images.githubusercontent.com/5024456/123884339-036fcb00-d919-11eb-9e4a-eac1cd69c758.png)

Login Page 

![REFER CANDIDATES (4)](https://user-images.githubusercontent.com/5024456/123884373-15ea0480-d919-11eb-850c-7daec44bc6a1.png)

Profiles Page

![REFER CANDIDATES (1)](https://user-images.githubusercontent.com/5024456/123884400-269a7a80-d919-11eb-8a8b-43213e39e800.png)

Register Page 

![REFER CANDIDATES (2)](https://user-images.githubusercontent.com/5024456/123884417-32863c80-d919-11eb-99d4-63d24f1c5f2a.png)

Uploads Page 

![REFER CANDIDATES (3)](https://user-images.githubusercontent.com/5024456/123884438-3e71fe80-d919-11eb-9cd6-59fad734a422.png)




