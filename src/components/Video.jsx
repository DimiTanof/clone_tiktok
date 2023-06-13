import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaMusic, FaHeart, FaComment, FaShare } from "react-icons/fa";
import './Video.css';
import { useRef, useState } from 'react';

const VideoInfo = ({ avatar, idName, nickName, music, content }) => {
  return (
    <div className="flex flex-row">
      <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={avatar} alt="avatar" />
      <div className='ml-3 min-w-[80%]' style={{ minWidth: '80%', marginLeft: '0.75rem' }}>
        <div className="bg-sky-500 hover:bg-sky-700 ...">
          <a href="#" className="text-3xl font-bold hover:underline">{idName}</a>
          <a href="#" className='ml-3'>{nickName}</a>
        </div>
        <div>{content}</div>
        <div className="flex flex-row items-center">
          <FaMusic /><span style={{ paddingLeft: '0.75rem' }}>{music}</span>
        </div>
      </div>
      <div>
        <button className="follow-button">
          Follow
        </button>
      </div>
    </div>
  );
};

const VideoContent = ({ video, like, comment, share }) => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const [count, setCount] = useState(like);
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    if (isLike) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setIsLike(!isLike);
  };

  //   <iframe width="320" height="560" src="https://www.youtube.com/embed/GIvFow3tVLM" title="Tại sao Nezuko lại ngậm tre trong miệng?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <iframe
        ref={videoRef}
        onClick={handleVideo}
        className="video rounded-md"
        style={{
          width: "320px",
          height: "560px",
        }}
        src={video}
        title="Tại sao Nezuko lại ngậm tre trong miệng?"
        loop
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', marginLeft: '5rem' }}>
        <div style={{ alignItems: 'center', marginBottom: '4px' }}>
          <button className={`icon ${isLike ? 'text-red-500' : ''}`} onClick={handleLike}>
            <FaHeart className='text-xl' />
          </button>
          <span style={{ justifyContent: 'center' }}>{count}</span>
        </div>
        <div style={{ alignItems: 'center', marginBottom: '4px' }}>
          <div className='icon'>
            <FaComment className='text-xl' />
          </div>
          <span>{comment}</span>
        </div>
        <div style={{ alignItems: 'center', marginBottom: '4px' }}>
          <div className='icon'>
            <FaShare className='text-xl' />
          </div>
          <span>{share}</span>
        </div>
      </div>
    </div>
  );
};

const Video = ({ data }) => {
  const { avatar, idName, nickName, music, content, videoShort, like, comment, share } = data;

  return (
    <div className="max-W-[500px] snap-start" style={{ maxWidth: '592px', borderBottomWidth: '2px', borderColor: '#E5E7EB', paddingBottom: '3rem', paddingTop: '3rem', scrollSnapAlign: 'start' }}>
      <VideoInfo avatar={avatar} idName={idName} nickName={nickName} music={music} content={content} />
      <VideoContent video={videoShort} like={like} comment={comment} share={share} />
    </div>
  );
};

export default Video;
