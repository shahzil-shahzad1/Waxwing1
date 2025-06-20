export default function LinkedInIcon({ className = "w-6 h-6", color='#1976D2' }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className={className}
        fill={color}
      >
        <g>
          <path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path>
          <circle cx="1.75" cy="1.75" r="1.75"></circle>
        </g>
      </svg>
    );
  }