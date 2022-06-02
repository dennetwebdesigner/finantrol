import { useEffect, useState } from 'react';

export const RowTh = ({ Width, Background, Style, Margin, Padding, Content }) => {
  const [width, setWidth] = useState('');
  const [background, setBackground] = useState('');
  const [margin, setMargin] = useState('');
  const [padding, setPadding] = useState('');

  const [style, setStyle] = useState({
    display: 'flex',
    width: Width,
    background: Background,
    margin: Margin,
    padding: Padding,
  });

  useEffect(() => {
    setWidth(Width);
    setBackground(Background);
    setMargin(Margin);
    setPadding(Padding);
  }, [style]);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'spac-between ',
      }}
    >
      {Content.map((item, index) => (
        <div key={index} style={style} className={item.className}>
          {item.content}
        </div>
      ))}
    </div>
  );
};
