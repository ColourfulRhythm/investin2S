# 2 Seasons Investment Page

A beautiful presidential letter-style page for investor commitments to 2 Seasons regenerative lifestyle development.

## Getting Started

First, install the dependencies:

```bash
npm install
```

### Email Configuration

To enable email notifications when forms are submitted, you need to set up environment variables:

1. Create a `.env.local` file in the root directory
2. Add your Gmail credentials:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**For Gmail setup:**
- Enable 2-factor authentication on your Google account
- Generate an App Password: https://myaccount.google.com/apppasswords
- Use that App Password as `SMTP_PASSWORD`

**Note:** Form submissions will be sent to `godunderGod100@gmail.com`

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Beautiful, readable serif fonts (Playfair Display for headings, Crimson Text for body)
- Presidential letter-style design
- Investment commitment form with amount and email inputs
- Automatic email notifications sent to `godunderGod100@gmail.com` when forms are submitted
- Submission confirmation message

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display, Crimson Text)
- Nodemailer (for email notifications)

