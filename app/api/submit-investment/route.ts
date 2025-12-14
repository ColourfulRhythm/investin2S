import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { amount, email } = await request.json()

    if (!amount || !email) {
      return NextResponse.json(
        { error: 'Amount and email are required' },
        { status: 400 }
      )
    }

    // Create transporter - using Gmail SMTP
    // For production, set these as environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASSWORD || 'your-app-password',
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: 'godunderGod100@gmail.com',
      subject: `New Investment Commitment - ₦${parseFloat(amount).toLocaleString()}`,
      html: `
        <div style="font-family: 'Crimson Text', serif; line-height: 1.6; color: #333;">
          <h2 style="font-family: 'Playfair Display', serif; color: #92400e;">New Investment Commitment</h2>
          
          <p><strong>Investment Amount:</strong> ₦${parseFloat(amount).toLocaleString()}</p>
          <p><strong>Investor Email:</strong> ${email}</p>
          
          <p style="margin-top: 20px;">A new investment commitment has been submitted through the 2 Seasons investment page.</p>
          
          <p style="margin-top: 20px; color: #666;">
            Please follow up with the investor to send the contract and payment details.
          </p>
        </div>
      `,
      text: `
        New Investment Commitment
        
        Investment Amount: ₦${parseFloat(amount).toLocaleString()}
        Investor Email: ${email}
        
        A new investment commitment has been submitted through the 2 Seasons investment page.
        Please follow up with the investor to send the contract and payment details.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Investment commitment submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to submit investment commitment' },
      { status: 500 }
    )
  }
}

