import React from "react";

const Savedstatus = ({ savedstatus }) => {
  if (!savedstatus) {
    // Handle the case where savedstatus is undefined
    return <div>No saved statuses available</div>;
  }

  return (
    <div style={{ display: 'flex', marginTop: '2vh', gap: '10vh', marginLeft: '10vh' }}>
      {savedstatus.map((status) => {
      return <div style={{ display: 'flex', flexDirection: 'column' }} >
          <img src={`${status.status[0]}`} alt="" style={{ width: '10vh', height: '10vh' }} />
          <span>{status.statusName}</span>
          
        </div>
})}
    </div>
  );
};

export default Savedstatus;
