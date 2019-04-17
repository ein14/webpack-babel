const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @param {string} comment
 * @returns {Promise<boolean>}
 */
const postComment = async comment => {
  await sleep(1000);

  return true;
};

export default { postComment };
