export default function ProfileCard(props) {
    return (
        <>
            <div id="card">
                <div>안녕하세요. 저는 {props.name}입니다.</div>
                <div>나이는 {props.age}살이고, 취미는 {props.hobby}입니다.</div>
            </div>
        </>
    );
}