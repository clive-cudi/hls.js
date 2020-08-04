import Fragment from '../loader/fragment';
import LevelDetails from '../loader/level-details';
import { Level, LevelParsed } from './level';
import { MediaPlaylist } from './media-playlist';
import { LoaderStats, PlaylistLevelType } from './loader';
import { Track, TrackSet } from './track';
import { SourceBufferName } from './buffer';
import { ChunkMetadata } from './transmuxer';
import LoadStats from '../loader/load-stats';
import { ErrorDetails, ErrorTypes } from '../errors';
import { MetadataSample, UserdataSample } from './demuxer';
import AttrList from '../utils/attr-list';

export interface MediaAttachingData {
  media: HTMLMediaElement
}

export interface MediaAttachedData {
  media: HTMLMediaElement;
}

export interface BufferCodecsData {
  video?: Track
  audio?: Track
}

export interface BufferCreatedData {
  tracks: TrackSet
}

export interface BufferAppendingData {
  type: SourceBufferName;
  data: Uint8Array;
  frag: Fragment;
  chunkMeta: ChunkMetadata
}

export interface BufferAppendedData {
  chunkMeta: ChunkMetadata
  frag: Fragment
  parent: PlaylistLevelType
  timeRanges: {
    audio?: TimeRanges
    video?: TimeRanges
    audiovideo?: TimeRanges
  }
}

export interface BufferEOSData {
  type: SourceBufferName
}

export interface BufferFlushingData {
  startOffset: number
  endOffset: number
  type: SourceBufferName
}

export interface ManifestLoadingData {
  url: string
}

export interface ManifestLoadedData {
  audioTracks: MediaPlaylist[]
  captions?: MediaPlaylist[]
  levels: LevelParsed[]
  networkDetails: any
  sessionData: Record<string, AttrList> | null
  stats: LoaderStats
  subtitles?: MediaPlaylist[]
  url: string
}

export interface ManifestParsedData {
  levels: Level[]
  audioTracks: MediaPlaylist[]
  firstLevel: number
  stats: LoaderStats
  audio: boolean
  video: boolean
  altAudio: boolean
}

export interface LevelSwitchingData extends Level {
  level: number;
}

export interface LevelSwitchedData {
  level: any
}

export interface TrackLoadingData {
  id: number
  url: string
}

export interface LevelLoadingData extends TrackLoadingData {
  level: number
}

export interface TrackLoadedData {
  details: LevelDetails
  id: number
  networkDetails: any
  stats: LoaderStats
}

export interface LevelLoadedData extends TrackLoadedData {
  level: number
}

export interface LevelUpdatedData {
  details: LevelDetails
  level: number
}

export interface LevelPTSUpdatedData {
  details: any,
  level: Level,
  drift: number,
  type: string,
  start: any,
  end: any
}

export interface AudioTrackSwitchingData {
  url: any
  type: any
  id: any
}

export interface AudioTrackSwitchedData {
  id: any
}

export interface AudioTrackLoadingData {
  url: string;
  id: number | null;
}

export interface AudioTrackLoadedData {
  details: LevelDetails;
  id: number;
  stats: LoaderStats;
  networkDetails: unknown;
}

export interface AudioTracksUpdatedData {
  audioTracks: MediaPlaylist[]
}

export interface SubtitleTracksUpdatedData {
  subtitleTracks: MediaPlaylist[]
}

export interface SubtitleTrackSwitchData {
  id: number
}

export interface SubtitleTrackLoadingData {
  url: string;
  id: number | null;
}

export interface SubtitleTrackLoadedData {
  details: LevelDetails;
  id: number | null;
  stats: LoaderStats;
  networkDetails: unknown;
}

export interface TrackSwitchedData {
  id: number
}

export interface SubtitleFragProcessed {
  success: boolean,
  frag: Fragment
}

export interface FragChangedData {
  frag: Fragment;
}

export interface FPSDropData {
  currentDropped: number
  currentDecoded: number
  totalDroppedFrames: number
}

export interface FPSDropLevelCappingData {
  droppedLevel: number
  level: number
}

export interface ErrorData {
  type: ErrorTypes
  details: ErrorDetails
  fatal: boolean
  buffer?: number
  bytes?: number
  context?: any
  error?: Error
  event?: any
  frag?: Fragment
  level?: number
  levelRetry?: boolean
  networkDetails?: any
  mimeType?: string
  reason?: string
  response?: any
  url?: string
  parent?: PlaylistLevelType
  err?: { // comes from transmuxer interface
    message: string;
  }
}

export interface SubtitleFragProcessedData {
  success: boolean
  frag: Fragment
  error?: Error
}

export interface CuesParsedData {
  type: 'captions' | 'subtitles',
  cues: any,
  track: string
}

interface NonNativeTextTrack {
  _id?: string
  label: any
  kind: string
  default: boolean
  closedCaptions?: MediaPlaylist
  subtitleTrack?: MediaPlaylist
}

export interface NonNativeTextTracksData {
  tracks: Array<NonNativeTextTrack>
}

export interface InitPTSFoundData {
  id: string
  frag: Fragment
  initPTS: number
}

export interface FragLoadingData {
  frag: Fragment
}

export interface FragLoadEmergencyAbortedData {
  frag: Fragment
  stats: LoaderStats
}

export interface FragLoadedData {
  frag: Fragment
  networkDetails: any
  payload: ArrayBuffer
  stats: LoaderStats
}

export interface FragDecryptedData {
  frag: Fragment
  payload: ArrayBuffer
  stats: {
    tstart: number
    tdecrypt: number
  }
}

export interface FragParsingInitSegmentData {

}

export interface FragParsingUserdataData {
  id: string,
  frag: Fragment,
  samples: UserdataSample[]
}

export interface FragParsingMetadataData {
  id: string,
  frag: Fragment,
  samples: MetadataSample[]
}

export interface FragParsedData {
  frag: Fragment
}

export interface FragBufferedData {
  stats: LoadStats
  frag: Fragment
  id: string
}

export interface LevelsUpdatedData {
  levels: Array<Level>
}

export interface KeyLoadingData {
  frag: Fragment
}

export interface KeyLoadedData {
  frag: Fragment
}

export interface LiveBackBufferData {
  bufferEnd: number
}