import { useContext, useRef } from "react";
import { LanguageContext } from "./context";
import "./Home.css";

const Home = () => {
  const { handleTranslate } = useContext(LanguageContext);
  const inputTag = useRef();
  const h2Tag = useRef();
  const audioTag = useRef();

  const handleLanguage = (language) => {
    window.event.preventDefault();
    const {
      current: { value },
    } = inputTag;
    const { text, sound } = handleTranslate(language, value);
    h2Tag.current.innerHTML = text;
    if (sound) {
      audioTag.current.src = sound;
      audioTag.current.setAttribute("controls", true);
    }
  };

  return (
    <form>
      <h1>📖 번역기 📖</h1>
      <p>
        안녕하세요, 안녕히가세요, <br /> 반갑습니다, 감사합니다, 미안합니다
      </p>
      <input ref={inputTag} type="text" placeholder="번역할 내용을 입력하세요." required />
      <button type="submit" onClick={() => handleLanguage("english")}>
        🇺🇸 영어 번역
      </button>
      <button type="button" onClick={() => handleLanguage("japanese")}>
        🇯🇵 일본어 번역
      </button>
      <button type="button" onClick={() => handleLanguage("chinese")}>
        🇨🇳 중국어 번역
      </button>
      <div>
        <h2 ref={h2Tag}>{}</h2>
        <audio ref={audioTag}></audio>
      </div>
    </form>
  );
};

export default Home;
