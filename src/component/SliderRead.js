import React, { Component } from "react";

class SliderRead extends Component {
  state = {
    leftdata: [
      {
        id: 1,
        title: "It is a long established distracted by the",
        date: "22 Aug,2021",
        color: "rgb(255, 196, 0)",
        category: "Travel",
        image:
          "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/01/78-270x205.jpg",
      },

      {
        id: 2,
        title: "The greatest Royal wedding dress ever.",
        date: "22 Aug,2021",
        color: "rgb(255, 0, 179)",
        category: "Fashion",
        image:
          "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/01/30-270x205.jpg",
      },
    ],
    rightdata: [
      {
        id: 1,
        title: "Liverpool’s attact make easy work of",
        date: "22 Aug,2021",
        color: "Green",
        category: "Sports",
        image:
          "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/01/65-270x205.jpg",
      },

      {
        id: 2,
        title: "If you are going to use.",
        date: "22 Aug,2021",
        color: "blue",
        category: "Tech",
        image:
          "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/02/22-270x205.jpeg",
      },
    ],
    middata: [
      {
        id: 1,
        title: "There are many variations. you need",
        date: "28 July, 2021",
        color: "red",
        category: "Politics",
        image:
          "https://themes.hasthemes.com/hashnews/wp-content/uploads/2018/01/23-585x445.jpeg",
      },
    ],
  };
  render() {
    const { leftdata, rightdata, middata } = this.state;
    return (
      <div className="wrapper_for_flex_head_card">
        <div className="wrapper_for_flex_head_card_left">
          {leftdata.map((d, i) => (
            <div key={i} className="main_card_warpper">
              <div className="card_category" style={{ background: d.color }}>
                <p>{d.category}</p>
              </div>
              <div className="wraper_hover_filter">
                <div
                  className="card_news_slide"
                  style={{
                    backgroundImage: `url(${d.image})`,
                  }}
                >
                  <div className="card_news_slide_content"></div>
                  <div className="card_news_slide_content">
                    <div className="card_title">
                      <p>{d.title}</p>
                    </div>
                    <div className="date_card">
                      <i className="fa fa-clock"></i> {d.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="wrapper_for_flex_head_card_mid">
          {middata.map((d, i) => (
            <div key={i} className="main_card_warpper_mid">
              <div className="card_category" style={{ background: d.color }}>
                <p>{d.category}</p>
              </div>
              <div className="wraper_hover_filter">
                <div
                  className="card_news_slide_mid"
                  style={{
                    backgroundImage: `url(${d.image})`,
                  }}
                >
                  <div className="card_news_slide_content_mid"></div>
                  <div className="card_news_slide_content_mid_bottom">
                    <div className="card_title">
                      <p>{d.title}</p>
                    </div>
                    <div className="date_card">
                      <i className="fa fa-clock"></i> {d.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="wrapper_for_flex_head_card_left">
          {rightdata.map((d, i) => (
            <div key={i} className="main_card_warpper">
              <div className="card_category" style={{ background: d.color }}>
                <p>{d.category}</p>
              </div>
              <div className="wraper_hover_filter">
                <div
                  className="card_news_slide"
                  style={{
                    backgroundImage: `url(${d.image})`,
                  }}
                >
                  <div className="card_news_slide_content"></div>
                  <div className="card_news_slide_content">
                    <div className="card_title">
                      <p>{d.title}</p>
                    </div>
                    <div className="date_card">
                      <i className="fa fa-clock"></i> {d.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SliderRead;
