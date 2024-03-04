import "./components.css"
import React from 'react';

interface HeaderValue {
  header: string;
}



export const formatFeaturesWithLineBreaks = (features: string): React.ReactNode => {
  return features.split('\n\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== features.length - 1 && <br />}
      {index !== features.length - 1 && <br />}
    </React.Fragment>
  ));
};

export const HeadersComp = ({ header }: HeaderValue) => {
  
  return (
    <>
      <div className="GenHeaderContainer">
        <h1 className="font-bold">{ header}</h1>
      </div>
    </>
  )
}

