import React, { ReactElement, useEffect } from 'react';
import { useField } from 'formik';
import { InputVideo, Description } from '../../components/atoms';
import { InputCustomType } from '../../components/atoms/Input/Input';
import { getVideoIdFromYoutubeUrl } from '@ytrank/utils';
import { Spacer } from '@geist-ui/react';
import { FieldProps } from '../../components/atoms/Fields/types';
import { gql, useLazyQuery } from '@apollo/client';
import { youtubeVideo, youtubeVideoVariables } from '@ytrank/types/src/generated/youtubeVideo';

const videoFragment = gql`
  fragment VideoDetail on YoutubeVideo {
    videoId
    title
    publishedAt
    description
    channelId
    channelTitle
    thumbnails {
      small
      medium
      large
    }
    tags
  }
`;

const YOUTUBE_VIDEO_QUERY = gql`
  query youtubeVideo($videoId: ID!) {
    youtubeVideo(videoId: $videoId) {
      ...VideoDetail
    }
  }
  ${videoFragment}
`;

type FieldInputProps = FieldProps & InputCustomType;

const FieldVideo = ({ title, ...props }: FieldInputProps): ReactElement => {
  const [field, { error, touched, value }, { setValue }] = useField(props.name);
  const hasError = error && touched;

  // parse videoId from value
  const videoId = getVideoIdFromYoutubeUrl(value) || '';
  const [getYoutubeVideo, { data, loading, error: errorQuery }] = useLazyQuery<
    youtubeVideo,
    youtubeVideoVariables
  >(YOUTUBE_VIDEO_QUERY, {
    variables: {
      videoId,
    },
  });

  useEffect(() => {
    if (videoId) getYoutubeVideo();
  }, [videoId]);

  return (
    <div className="input">
      {title && <Description>{title}</Description>}
      <InputVideo
        {...field}
        {...props}
        title={data?.youtubeVideo?.title || undefined}
        thumbnail={data?.youtubeVideo?.thumbnails?.small}
        isLoading={Boolean(videoId) && loading}
        onRemove={() => setValue('')}
        error={hasError ? error : null}
        errorQuery={hasError ? null : errorQuery}
      />
      <Spacer y={0.8} />
      <style jsx>{`
        .input {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default FieldVideo;
