import React from 'react';

const PowerBI = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <iframe title="FinancialSample2" width="1024" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiZDQwYTg3OTctZGUxYy00NDkyLTg4OTMtOWU1YjRlNzcxZjRkIiwidCI6ImEyMWY0YzI3LTMzZTUtNGNhZC1hMWZmLTYxNjdiZDlmOWE0NSIsImMiOjR9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
};

export default PowerBI;
