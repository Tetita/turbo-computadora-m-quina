// External Packages
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// Internal Components
import adminReducer from './slices/adminSlice';
import channelCreationReducer from './slices/channelCreationSlice';
import channelReducer from './slices/channelSlice';
import contractReducer from './slices/contractSlice';
import notificationReducer from './slices/notificationSlice';
import canSendNotification from "./slices/sendNotificationSlice";
import spamReducer from './slices/spamSlice';
import userJourneyReducer from './slices/userJourneySlice';
import peerReducer from './slices/peerSlice';

const rootReducer = combineReducers({
	contracts: contractReducer,
	channels: channelReducer,
	channelCreation: channelCreationReducer,
	admin: adminReducer,
  peer: peerReducer,
	notifications: notificationReducer,
	spam: spamReducer,
	userJourney: userJourneyReducer,
	canSend:canSendNotification,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
		immutableCheck: false
	})
});

export default store;
