import React, { useState, useEffect} from "react";
import "./Overview.css";
import Button from 'react-bootstrap/Button';
import LeftBar from "../../Components/Leftbar/leftbar"; 
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Overview = () => {
  const { videoID, title } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (videoID) {
        try {
          setLoading(true);
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/search/`,
            {
              params: {
                query: videoID,
              },
            }
          );
          if (response.data && response.data.videos) {
            setVideos(response.data.videos);
          }
        } catch (error) {
          console.error("Error fetching videos from YouTube:", error);
          setError("Error fetching videos. Please try again later.");
        } finally {
          setLoading(false);
        }
      } else {
        setVideos([]);
      }
    };

    fetchVideos();
  }, [videoID, title]);

  return (
    <div className="overview-of-course">
      <LeftBar /> 
      <div className="resources">Overview</div>
      <div className="resources2">{`Cyber Security -> Developing Secure Software`}</div>
      <div className="course-details-software-container">
        <p className="course-details">{`Course details: `}</p>
        <p className="course-details">&nbsp;</p>
        <p className="course-details-1">
          {videos.map((video) => (
            <div key={video.id}>
              <p>{video.snippet.description}</p>
            </div>
          ))}

        </p>

        <p className="course-details">Learning objectives:</p>
        <p className="course-details">&nbsp;</p>
        <ul className="what-is-software-security-ana">
          <li className="what-is-software">What is software security?</li>
          <li className="what-is-software">
            Analyzing different kinds of security threats
          </li>
          <li className="what-is-software">
            Designing secure software by adopting patterns and addressing
            vulnerabilities
          </li>
          <li className="what-is-software">Avoiding buffer overflows</li>
          <li className="what-is-software">
            Countering insecure direct object references
          </li>
          <li className="what-is-software">Securing sensitive data</li>
          <li className="what-is-software">Testing software security</li>
        </ul>
        <p className="course-details">&nbsp;</p>
      </div>
     
      <Link to={`/learningmode/${videoID}/${encodeURIComponent(title)}`}>
        <Button className="button-base">
          <div className="text-2">Join</div>
        </Button>
      </Link>
  
    </div>
  );
};

export default Overview;
