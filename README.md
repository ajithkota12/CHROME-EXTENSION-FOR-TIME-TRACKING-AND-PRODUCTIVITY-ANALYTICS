# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

COMPANY : CODTECH IT SOLUTIONS

NAME : KOTA AJITH KUMAR

INTERN ID : CT04WA89

DOMAIN : FULL STACK DEVELOPMENT

DURATION : 4WEEKS

MENTOR : NEELA SANTOSH

DESCRIPTION :
The Time Tracking & Productivity Analytics Chrome Extension is a real-time web activity monitoring tool designed to enhance user productivity by tracking time spent on various websites. This extension operates directly within the Chrome browser and provides insightful analytics on browsing habits. The core idea is to help users become more aware of their digital behavior, identify time drains, and improve time management.

The extension works seamlessly in the background, logging the active time spent on websites while the user is actively browsing. It categorizes websites into productive and unproductive categories based on predefined or user-defined criteria (e.g., coding platforms like LeetCode and GitHub are considered productive, while social media sites like Facebook or Instagram are marked unproductive). These insights are then visualized through a dashboard, allowing users to monitor their weekly or daily usage trends and make informed decisions about their digital habits.

Key Features:
Automatic Time Tracking:
The background script detects active tabs and records the duration of time spent on each website. It avoids idle time and ensures that only active engagement is tracked.

Real-Time Data Logging:
Website usage data is stored in Chrome’s local storage and optionally pushed to a PostgreSQL backend for persistent storage, analysis, and backup.

Popup Summary:
Clicking the extension icon opens a popup showing a real-time list of websites visited along with the time spent on each. This allows users to get a quick glance at their productivity status.

Productivity Categorization:
Websites are classified as productive or unproductive based on a static list or user preferences. This helps users reflect on how much of their time is spent on beneficial vs. distracting activities.

Analytics Dashboard:
An optional external dashboard, built using HTML, Chart.js, and JavaScript, visualizes usage data in bar or pie charts. This dashboard can fetch data from a backend API (Node.js + PostgreSQL) to display weekly or daily reports.

PostgreSQL Backend Integration:
A Node.js server with Express handles API requests to store and retrieve data from a PostgreSQL database. Each entry contains details like user_id, url, duration, and timestamp, allowing for detailed analytics.

Secure Data Handling:
Proper error handling and validations are implemented in both the extension and the backend to ensure reliable performance and secure storage of user data.

Scalable Architecture:
The structure is modular and scalable, making it easy to introduce features like user authentication, report downloads, or advanced categorization in the future.

Technical Stack:
Frontend: HTML, CSS, JavaScript (for popup and dashboard)

Chrome Extension API: manifest.json, background.js, popup.js, chrome.storage

Visualization: Chart.js (for rendering charts in the dashboard)

Backend: Node.js, Express.js

Database: PostgreSQL (stores time logs per user and website)

Tools & Platforms: Chrome, VSCode, Postman, pgAdmin

Use Cases:
Students: To monitor how much time is spent on learning platforms vs. entertainment sites.

Remote Workers: To self-audit daily browser usage and identify productivity gaps.

Project Managers: With enhancements, this tool could be adapted to provide team productivity metrics.

General Users: For digital detox and improving focus during working hours.

Challenges Faced & Solutions:
Tracking active vs. idle time:
Chrome does not directly detect user inactivity. This was addressed using chrome.tabs.onActivated and chrome.idle.queryState() to estimate active browsing time accurately.

Data persistence across sessions:
Local storage (chrome.storage.local) was used to temporarily hold data. A backend server was integrated to persist logs and fetch them later for dashboard analysis.

Cross-origin communication:
Using CORS in the Node.js server allowed the frontend (dashboard) to make secure API requests.

Extension Load Errors:
Errors like missing icon.png or manifest issues were solved by structuring folders correctly and specifying valid paths and icon sizes (16x16, 48x48, 128x128).

Future Enhancements:
Add user authentication (JWT-based) for personalized analytics.

Enable users to manually classify websites as productive/unproductive.

Allow exporting of reports in PDF/CSV format.

Add goal-setting and notification features to alert users when they've exceeded time on certain sites.

Conclusion:
This Time Tracking & Productivity Analytics Chrome Extension is a powerful tool for self-awareness and time management. It helps users reclaim lost hours, improve focus, and increase productivity by providing clear, visual insights into their browsing habits. The combination of frontend UI, Chrome APIs, and a backend with database support makes this a robust full-stack application suitable for personal or professional use.


OUTPUT:

![Image](https://github.com/user-attachments/assets/2b867142-a2b0-460f-a2b8-6333f0bfa3c0)

![Image](https://github.com/user-attachments/assets/109e43b6-e063-4c0b-9ba9-6f1cec46e676)

![Image](https://github.com/user-attachments/assets/a92e39d8-d2b9-4c24-ac7d-3f288c742095)
