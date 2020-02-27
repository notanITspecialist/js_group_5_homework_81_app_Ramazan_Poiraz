import axios from 'axios';

export const REQ_SHORT = 'REQ_SHORT';
export const RES_SHORT = 'RES_SHORT';
export const ERR_SHORT = 'ERR_SHORT';

const reqShort = () => ({type: REQ_SHORT});
const resShort = short => ({type: RES_SHORT, short});
const errShort = e => ({type: ERR_SHORT, e});

export const shorted = url => async dispatch => {
  try{
      dispatch(reqShort());
      const data = await axios.post('http://localhost:8000', {originalUrl: url.url});
      dispatch(resShort(data.data));
  } catch (e) {
      dispatch(errShort(e))
  }
};