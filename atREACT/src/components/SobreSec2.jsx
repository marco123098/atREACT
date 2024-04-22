import '../SobreSec1.css';

  function SobreSec2() {
    return (
      <>
        <div className="card-container">
          <div className="card" style={{ backgroundColor: '#fff' }}>
            <div className="card-header" style={{ backgroundColor: '#F1C2B0', color: '#ffffff' }}>01</div>
            <img className="card-image" src="../Public/youtube.png" alt="Youtube" />
            <div className="card-body">
              <p className='titulo'>Youtube</p>
              <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
            </div>
          </div>
  
          <div className="card" style={{ backgroundColor: '#fff' }}>
            <div className="card-header" style={{ backgroundColor: '#F9EB98', color: '#ffffff' }}>02</div>
            <img className="card-image" src="../Public/tiktok.png" alt="Tiktok" />
            <div className="card-body">
              <p className='titulo'>Tiktok</p>
              <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
            </div>
          </div>
  
          <div className="card" style={{ backgroundColor: '#fff' }}>
            <div className="card-header" style={{ backgroundColor: '#C0D9DD', color: '#ffffff' }}>03</div>
            <img className="card-image" src="../Public/facebook.png" alt="Facebook" />
            <div className="card-body">
              <p className='titulo'>Facebook</p>
              <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default SobreSec2;
