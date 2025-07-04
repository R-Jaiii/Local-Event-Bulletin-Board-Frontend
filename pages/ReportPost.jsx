import React from 'react';
import './ReportPost.css';

export default function ReportPost() {
  return (
    <div className="report-container">
      <h1 className="report-title">Report a Post</h1>

      <p className="report-intro">
        We’re here to keep the board safe, respectful, and neighborly. Use the form below to report any post that violates our community guidelines.
      </p>

      <form className="report-form">
        <label>
          Post Title or Description<br />
          <input type="text" name="postTitle" placeholder="What post are you reporting?" required />
        </label>

        <label>
          Reason for Report<br />
          <select name="reason" required>
            <option value="">-- Select a reason --</option>
            <option value="spam">Spam or scam</option>
            <option value="offensive">Offensive or inappropriate content</option>
            <option value="misleading">False or misleading information</option>
            <option value="privacy">Violates someone’s privacy</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Additional Details (optional)<br />
          <textarea name="details" rows="5" placeholder="Anything else we should know?"></textarea>
        </label>

        <label>
          Your Email (optional)<br />
          <input type="email" name="email" placeholder="you@example.com" />
        </label>

        <button type="submit">Submit Report</button>
      </form>

      <p className="report-note">
        ⚠️ We don’t tolerate false reports. All reports are reviewed manually and kept confidential.
      </p>
    </div>
  );
}
