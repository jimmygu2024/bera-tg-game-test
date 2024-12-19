import {create} from 'zustand';
import { SessionTypes } from '@okxconnect/universal-provider';

interface OkxSessionState {
  session: SessionTypes.Struct | undefined;
  setSession: (session: SessionTypes.Struct | undefined) => void;
}

const useOkxSessionStore = create<OkxSessionState>((set) => ({
  session: void 0,
  setSession: (session) => set({ session }),
}));

export default useOkxSessionStore;
