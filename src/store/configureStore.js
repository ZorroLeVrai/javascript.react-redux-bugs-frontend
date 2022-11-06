import {configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import toast from './middleware/toast';
import api from './middleware/api';
import reducer from './reducer';
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/redux-toolkit.esm';

export default function() {
  return configureStore(
    {
      reducer,
      middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        logger({ destination: "console"}),
        toast,
        api
      ]
    }
  );
}
