import React from "react";


function PostDetails(props) {
    let { body, title } = props;
    return (
        <>
            <div className="card" style={{ border: '5px', margin: '80px 0' }}>
                <div className="card-body text-center d-flex flex-wrap justify-content-around p-3" style={{ width: '600px', margin: 'auto', border: '1px solid #cdcdcd', borderRadius: '10px', boxShadow: '1px 1px #1b000061', color: '#004785' }}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0&w=176&h=176" alt="avatar" class="rounded-circle img-fluid" style={{ width: '110px' }} />
                    <h3 className="my-2 col-12" style={{ color: '#004785' }}>postId : {title}</h3>
                    <h3 className="my-2 col-12" style={{ color: '#004785' }}>post body : {body}</h3>


                </div>
            </div>

        </>


    )
}

export default PostDetails;