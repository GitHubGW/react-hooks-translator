const translations = {
  english: {
    안녕하세요: "Hello.",
    안녕히가세요: "Bye.",
    반갑습니다: "Welcome",
    감사합니다: "Thanks.",
    미안합니다: "Sorry.",
  },
  japanese: {
    안녕하세요: "こんにちは。",
    안녕히가세요: "さようなら。",
    반갑습니다: "嬉しいです。",
    감사합니다: "ありがとう。",
    미안합니다: "すみません。",
  },
  chinese: {
    안녕하세요: "你好。",
    안녕히가세요: "您慢走。",
    반갑습니다: "很高兴见到你。",
    감사합니다: "谢谢。",
    미안합니다: "对不起。",
  },

  sound: {
    english: {
      안녕하세요:
        "https://dict-dn.pstatic.net/naver/dic/naverdic/endic/pron/new/us/004/004400.mp3?_lsu_sa_=33c8d95b7de93c86ee97611c34f4bdfa4d7b6395290c8fd06e02aa74ab226bd15a5427f26125017099116b35cf2180cde4e684298e546420b911ddb9c3cd12281a3364b3f7834f47383a955f23b51b45",
      안녕히가세요:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=mijin&text=%EC%95%88%EB%85%95%ED%9E%88%EA%B0%80%EC%84%B8%EC%9A%94",
      반갑습니다:
        "https://dict-dn.pstatic.net/naver/dic/naverdic/endic/pron/new/us/010/010037.mp3?_lsu_sa_=3a2890517dbf39c6369471613664bff2bdfa6b458809efb362b2ff7fab1f6131985717946835b67c19916c658e25b0652cb2a8cbf436044cdaef76436c5d2ccc910fd369fd7ee56fe093b5ac4a4b81cf",
      감사합니다:
        "https://dict-dn.pstatic.net/naver/dic/naverdic/endic/pron/new/us/009/009110.mp3?_lsu_sa_=36b87d59ad2d3e36879ec1d731842ef14dd86cb59c04df306f820574aba96c61b95dd7f76755827bc90062e5512a302fc0aab8d11ff8d8e11f46aa1b18be77f7a54d305c6a51b73326dba963e74ea46b",
      미안합니다:
        "https://dict-dn.pstatic.net/naver/dic/naverdic/endic/pron/new/us/008/008249.mp3?_lsu_sa_=39c8505e0db33fe64b90617b38c46cf2dd1a64d546050f6863725d7c9b8c6841265e374069c5087729d76015da2d40311f4902e7074c0fb8ff6e8fec4e25c9c24c7e47e12af671fbd2d2d343dcd9a7a4",
    },
    japanese: {
      안녕하세요:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=yuri&text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF",
      안녕히가세요:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=yuri&text=%E3%81%95%E3%82%88%E3%81%86%E3%81%AA%E3%82%89%E3%80%82",
      반갑습니다:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=yuri&text=%E5%AC%89%E3%81%97%E3%81%84%E3%81%A7%E3%81%99",
      감사합니다:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=yuri&text=%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%80%82",
      미안합니다:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=yuri&text=%E3%81%99%E3%81%BF%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82",
    },
    chinese: {
      안녕하세요:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=meimei&text=%E4%BD%A0%E5%A5%BD%E3%80%82",
      안녕히가세요:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=meimei&text=%E6%82%A8%E6%85%A2%E8%B5%B0%E3%80%82",
      반갑습니다:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=meimei&text=%E5%BE%88%E9%AB%98%E5%85%B4%E8%A7%81%E5%88%B0%E4%BD%A0%E3%80%82",
      감사합니다:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=meimei&text=%E8%B0%A2%E8%B0%A2%E3%80%82",
      미안합니다:
        "https://m.search.naver.com/p/csearch/ocontent/util/ttsProxy.naver?service=nco_translate&from=pc_search&speech_fmt=mp3&speed=0&passportKey=526fb46ddce9691f3bd1a94a39b8e0073cbf7855&speaker=meimei&text=%E5%AF%B9%E4%B8%8D%E8%B5%B7%E3%80%82",
    },
  },
};

export default translations;
