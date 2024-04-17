<!DOCTYPE html>
<html>
  <title>Video Downloader | Nischal Acharya</title>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Free online All In One video downloader to download All videos in MP4 in HD quality with high download speed."
    />
    <meta name="robots" content="index,follow" />
    <meta
      name="keywords"
      content="Free online All In One video downloader to download All videos in MP4 in HD quality with high download speed."
    />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="icon"
      href="https://nishchalacharya.com.np/img/hero.png"
      sizes="16x16"
      type="image/png"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Jersey+10+Charted&family=Jersey+20&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
      rel="stylesheet"
    />

    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: "Rubik", sans-serif;
      }
      .mt-5,
      .my-5 {
        margin-top: 0rem !important;
      }
      #hd {
        width: 100%;
        height: 390px;
        margin: 0 0 50px 0;
      }

      .card,
      .round {
        border-radius: 30px;
        background-color: #ffffffa9;
      }
      .card {
        box-shadow: 2px 2px 6px #000;
      }
      .btn {
        border-radius: 30px;
      }
      .bg {
        background-image: url("img/socialmedia.webp");
        background-repeat: no-repeat;
        background-size: cover;
      }
    </style>
  </head>
  <body class="bg">
    <div id="hd">
      <center>
        <img
          class="mt-4"
          alt="All In One video downloader"
          height="100"
          src="img/top_logo.png"
          width="400"
          title="High Quality All In One Video Downloader"
        />
      </center>
      <div class="col-md-6 offset-md-3 mt-5">
        <div class="card">
          <div class="card-header head">
            <center>
              <h5>All In One Video Downloader</h5>
            </center>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="text-weight"><b>Enter The Link:</b></label>
                  <input
                    id="inp"
                    type="txt"
                    placeholder="Paste video link here"
                    name="link"
                    class="form-control link round"
                    required
                  />
                </div>
              </div>
            </div>
            <form class="form-download">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="text-weight"
                      ><b>Select Video Format:</b></label
                    >
                    <select class="form-control formte round" required>
                      <option selected disabled>Select Video Formate</option>
                      <option value="mp3">Mp3</option>
                      <option value="mp4a">144 Mp4</option>
                      <option value="360">360 Mp4</option>
                      <option value="480">480 Mp4</option>
                      <option value="720">720 Mp4</option>
                      <option value="1080">1080 Mp4</option>
                      <option value="4k">4k Mp4</option>
                      <option value="8k">8k Mp4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group mt-4 download-video">
                    <button
                      class="btn btn-success btn-block click-btn-down"
                      type="submit"
                    >
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script type="text/javascript">
    

    $(".click-btn-down").click(function () {
      var link = $(".link").val();
      var fromate = $(".formte").children("option:selected").val();
      var src = "" + link + "=" + fromate + "";
      downloadVideo(link, fromate);
    });
    function downloadVideo(link, fromate) {
      $(".download-video").html(
        '<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url=' +
          link +
          "&f=" +
          fromate +
          '"></iframe>'
      );
    }
  </script>
</html>
