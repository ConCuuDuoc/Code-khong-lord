import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./LearningMode.css";
import LeftBar from "../../Components/Leftbar/leftbar";
import like from "./images/like.svg";

const LearningMode = () => {
  const { videoID, title } = useParams();
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {

    const fetchVideoDetails = async () => {
      try {
        // Fetch video details using videos endpoint
        const videoResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoID}&key=AIzaSyBXYgQQCIozjytEaHTsbMoxZIOe3JvAy0w`
        );
        const videoData = await videoResponse.json();

        if (videoData.items && videoData.items.length > 0) {
          const videoDetails = videoData.items[0];
          setLikeCount(videoDetails.statistics.likeCount);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=AIzaSyBXYgQQCIozjytEaHTsbMoxZIOe3JvAy0w`
        );
        const data = await response.json();

        if (data.items) {
          setComments(data.items);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchVideoDetails();
    fetchComments();
  }, [videoID]);

  return (
    <div className="dashboard-profile-settings1">
      <div className="dashboard-profile-settings-child1">
        {/* Embed YouTube video */}
        <div className="title1">
          <p className="text1">{decodeURIComponent(title)}</p>
        </div>
        <div className="youtube1">
          <iframe 
            title="YouTube Video"
            width="1280"
            height="720"
            src={`https://www.youtube.com/embed/${videoID}`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="like-count">
            <img className="image" src={like} alt="Like" />
            <p className = "like">{`Likes: ${likeCount}`}</p>
        </div>
        <div id="comments">
          {comments.map(comment => (
            <div key={comment.id} className="comment-temp">
              <div className="photo">
                <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Profile" />
              </div>
              <div className="name">
                <h5>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h5>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <LeftBar />
    </div>
  );
};

export default LearningMode;
