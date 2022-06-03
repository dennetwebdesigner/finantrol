import React, { useEffect, useState } from 'react';

interface iRowTh {
  Width: string | any;
  Background: string | any;
  Margin: string | any;
  Padding: string | any;
  Content: string | any;
}

interface iDataRow {
  className: string | any;
  content: string | any;
}

export const RowTh = ({
  Width,
  Background,
  Margin,
  Padding,
  Content,
}: iRowTh): JSX.Element => {
  const [width, setWidth] = useState('');
  const [background, setBackground] = useState('');
  const [margin, setMargin] = useState('');
  const [padding, setPadding] = useState('');

  const [style, setStyle] = useState({});

  useEffect(() => {
    setWidth(Width);
    setBackground(Background);
    setMargin(Margin);
    setPadding(Padding);
    setStyle({
      display: 'flex',
      width: width,
      background: background,
      margin: margin,
      padding: padding,
    });
  }, [style]);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'spac-between ',
      }}
    >
      {Content.map((item: iDataRow, index: number) => (
        <div key={index} style={style} className={item.className}>
          {item.content}
        </div>
      ))}
    </div>
  );
};
