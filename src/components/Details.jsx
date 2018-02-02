var Details = (props) => (
  <div>
    <div id="extra-info">Views: {props.details.items[0].statistics.viewCount}</div>
    <div id="extra-info">Likes: {props.details.items[0].statistics.likeCount}</div>
    <div id="extra-info">Comments: {props.details.items[0].statistics.commentCount}</div>
  </div>
);

window.Details = Details;