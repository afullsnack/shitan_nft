export default ({ href, title, style }) => {
  return (
    <a href={href} style={{ ...style }}>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          width: "fit-content",
        }}
      >
        <div className="hero-btn hero-btn-1"></div>
        <div className="hero-btn hero-btn-2">
          <span>{title}</span>
        </div>
        <div className="hero-btn hero-btn-3"></div>

        <style jsx>{`
          .hero-btn {
            color: #fff;
            background: rgba(232, 7, 24, 1);
            font-weight: 700;
            text-align: center;
            text-decoration: none;
            border: 0;
            outline: 0;
            border-radius: 4px;
            font-size: 1.1rem;
            padding: 12px 35px;
            display: inline;
            transform: skew(-21deg);
          }
          .hero-btn.hero-btn-1,
          .hero-btn.hero-btn-3 {
            padding: 0;
            width: 20px;
          }
          .hero-btn.hero-btn-1 {
            margin-right: 8px;
          }
          .hero-btn.hero-btn-3 {
            margin-left: 8px;
          }
          .hero-btn:visited {
            color: #fff;
          }
          .hero-btn:hover {
            background: #0069a8;
            color: #fff;
          }

          div:hover .hero-btn {
            background: #0069a8;
            color: #fff;
          }
          .hero-btn > span {
            display: inline-block;
            transform: skew(21deg);
          } /* Un-skew the text */
        `}</style>
      </div>
    </a>
  );
};
