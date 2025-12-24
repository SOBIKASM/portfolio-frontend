import './style.css';
import { FiDownload } from "react-icons/fi";
import { useState } from 'react';

const Resume = () => {
  const [loading, setLoading] = useState(false);

  const downloadResume = async () => {
    setLoading(true); // start loading
    try {
      const response = await fetch("/RESUME.pdf");
      if (!response.ok) throw new Error("Network response was not ok");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "RESUME.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      alert("Download successful!");
    } catch (error) {
      console.error(error);
      alert("Download failed!");
    } finally {
      setLoading(false); // stop loading
    }
  }

  return (
    <div className='resume-section' id='resume'>
      <h2>RESUME</h2>
      <button onClick={downloadResume} disabled={loading} className="btn">
        {loading ? "Downloading..." : "DOWNLOAD"} <FiDownload size={20} style={{ marginLeft: "8px" }} />
      </button>
    </div>
  )
}

export default Resume;
