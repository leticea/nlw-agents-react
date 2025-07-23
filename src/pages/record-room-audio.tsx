import { Button } from "@/components/ui/button";
import { useState } from "react";

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false);

  function startRecording() {
    setIsRecording(true);
  }

  return (
    <div className="h-screen flex items-center justify-center gap-3 flex-col">
      <Button onClick={startRecording}>Gravar áudio</Button>
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  );
}
