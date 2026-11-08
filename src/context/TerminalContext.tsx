import { useState, type ReactNode } from 'react';
import { TerminalContext, TERMINALS, type TerminalId } from './terminalState';

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [terminalId, setTerminalId] = useState<TerminalId>('zct');
  const terminal = TERMINALS.find(t => t.id === terminalId)!;
  return (
    <TerminalContext.Provider value={{ terminal, setTerminalId }}>
      {children}
    </TerminalContext.Provider>
  );
}
