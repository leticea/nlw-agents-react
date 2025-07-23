import { Button } from "@/components/ui/button";
import { useState } from "react";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function";

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false);

  async function stopRecording() {
    setIsRecording(false);
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert("O seu navegador não suporta gravação");
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    const recorder = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        console.log(event.data);
      }
    };

    recorder.onstart = () => {
      console.log("Gravação iniciada!");
    };

    recorder.onstop = () => {
      console.log("Gravação encerrada/pausada!");
    };

    recorder.start();
  }

  return (
    <div className="h-screen flex items-center justify-center gap-3 flex-col">
      {isRecording ? (
        <Button onClick={stopRecording}>Pausar gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar áudio</Button>
      )}
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  );
}
