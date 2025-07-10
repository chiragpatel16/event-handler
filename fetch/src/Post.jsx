export default function Post({ id, title, body }) {
    return (
        <div className="post" key={id}>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}