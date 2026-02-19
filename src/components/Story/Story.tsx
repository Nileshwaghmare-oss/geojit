import storyBg from '@/assets/Home-page-video.png';
import './Story.scss';

const Story = () => {
  return (
    <section className="story">
      <img src={storyBg} alt="The Geojit Story" className="story__bg" />
      {/* <div className="story__overlay" /> */}
      <div className="story__video-section">
        <a href="#" className="story__play-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          Watch Our Journey
        </a>
        
      </div>
    </section>
  );
};

export default Story;
