export const Err = (status: number, message: string) => {
  return JSON.stringify({ error: { status, message } });
};

export const ErrResolve = (error: string) => {
  const result = JSON.parse(error);
  return result;
};
