interface MuxVideoProps {
  /** Mux playback ID */
  playbackId: string;
  /** Title for accessibility */
  title?: string;
  /** Aspect ratio (default: 16/9) */
  aspectRatio?: string;
  /** Autoplay (default: false) */
  autoPlay?: boolean;
  /** Muted (default: false, true if autoPlay) */
  muted?: boolean;
  /** Loop (default: false) */
  loop?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Accent colour for the player controls */
  accentColor?: string;
}

/**
 * Renders a Mux video player with streaming support.
 *
 * Requires @mux/mux-player-react to be installed.
 * The Mux player handles adaptive bitrate streaming (HLS),
 * poster generation, and accessibility features.
 *
 * Usage:
 * ```tsx
 * <MuxVideo
 *   playbackId="YOUR_MUX_PLAYBACK_ID"
 *   title="Studio tour"
 * />
 * ```
 *
 * TODO: Upload videos to Mux and use the playback IDs here.
 */
export function MuxVideo({
  playbackId,
  title,
  aspectRatio = "16/9",
  autoPlay = false,
  muted,
  loop = false,
  className = "",
  accentColor = "#2d4a3e",
}: MuxVideoProps) {
  // Lazy-load the Mux player to avoid SSR issues and reduce initial bundle
  // During SSR / prerender, render a placeholder
  if (typeof window === "undefined") {
    return (
      <div
        className={className}
        style={{
          aspectRatio,
          backgroundColor: "var(--color-border-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{ color: "var(--color-text-light)", fontSize: "0.875rem" }}
        >
          Video: {title || playbackId}
        </span>
      </div>
    );
  }

  return (
    <div className={className} style={{ aspectRatio }}>
      {/* @ts-expect-error — mux-player is a web component loaded by the package */}
      <mux-player
        playback-id={playbackId}
        metadata-video-title={title}
        accent-color={accentColor}
        autoplay={autoPlay ? "" : undefined}
        muted={(muted ?? autoPlay) ? "" : undefined}
        loop={loop ? "" : undefined}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

// Side-effect: import the Mux player web component on the client
if (typeof window !== "undefined") {
  import("@mux/mux-player-react");
}
