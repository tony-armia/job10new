# Job10 Email Marketing Campaign

This directory contains production-ready promotional email campaigns for **Job10**.

## 1. Standalone Single-File Versions (Shareable & Offline-Ready)
Each of these files is **100% self-contained** with all images and logos embedded directly as Base64 data. You can share, email, or double-click any single file and it will open in any web browser with all images loading immediately without needing any server or internet connection:

| File | Purpose | Subject Line |
| :--- | :--- | :--- |
| [`general.html`](./general.html) | Dual Audience / Combined | *Your next opportunity. Your next great hire.* |
| [`jobseeker.html`](./jobseeker.html) | Jobseeker Campaign | *Your next opportunity could be closer than you think* |
| [`recruiter.html`](./recruiter.html) | Recruiter Campaign | *Great candidates. Less time searching.* |
| [`preview.html`](./preview.html) | **All-in-One Presentation Suite** | Interactive viewer with tabs & Desktop/Mobile switchers |

## 2. Plain-Text Fallbacks
* [`general.txt`](./general.txt)
* [`jobseeker.txt`](./jobseeker.txt)
* [`recruiter.txt`](./recruiter.txt)

## 3. Hosted Versions for ESP Bulk Sending (`hosted-for-esp/`)
For Email Service Providers (Klaviyo, Mailchimp, HubSpot, SendGrid) that prefer external HTTPS image URLs during high-volume SMTP delivery:
* [`hosted-for-esp/general.html`](./hosted-for-esp/general.html)
* [`hosted-for-esp/jobseeker.html`](./hosted-for-esp/jobseeker.html)
* [`hosted-for-esp/recruiter.html`](./hosted-for-esp/recruiter.html)

Images are hosted on your live domain under `/public/images/email/` and backed up in `assets/`.
