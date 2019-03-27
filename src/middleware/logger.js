const logger = store => next => action => {
  console.group(action.type);
  console.log("%cThe action: ", "color: #1197E3", action);
  const result = next(action);
  console.log("%cThe new state: ", "color: #bada55", store.getState());
  console.groupEnd();

  return result;
};

export default logger;
