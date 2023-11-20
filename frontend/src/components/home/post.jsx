import React from "react";
import "../../styles/post.css";
import { obj as postobject } from ".././data/postdata.js";

const Post = () => {
  return (
    <div className="postbox">
      {
        postobject.map(postdata => {
          return <div style={{border:'2px solid grey',margin:'10px', padding:'0px 15px'}}>
            <div className="posthead">
              <img src={`${postdata.profilepic}`} width="30px" height="40px" style={{ borderRadius: '50%' }} alt="" />
              <span>{postdata.username} </span>
            </div>
            <div className="postmain">
              <img width="100%" style={{borderRadius:'5px'}} src={`${postdata.postpic}`} alt="" />
              <span>{postdata.likes} likes </span>
              <span style={{ color: 'grey', marginBottom: '20px' }} >{postdata.aboutpost}</span>
            </div>

            <div>
              {
                postdata.Comment.map(commnet => {
                  return <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img width="20px" height="20px" style={{ borderRadius: '50%' }} src={`${commnet.profilepic}`} alt="" />
                      <span> {commnet.username} </span>
                      <span> {commnet.commnet} </span>
                    </div>
                    <span style={{ color: 'grey', fontSize: '12px', marginLeft: '25px', marginTop: '10px' }}> {commnet.likes} likes </span>
                  </div>
                })
              }
            </div>
          </div>

        })
      }
    </div>
  )
}

export default Post;