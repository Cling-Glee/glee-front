'use client';

import Image from 'next/image';

interface ProfileViewProps {
  profileImage: string | null;
  name: string;
  description: string;
  answeredQuestionCount: number;
  totalQuestionCount: number;
  followerCount: number;
  onClickEditProfileButton: () => void;
  onClickFollowListButton: () => void;
}

const ProfileView = ({
  profileImage,
  name,
  description,
  answeredQuestionCount,
  totalQuestionCount,
  followerCount,
  onClickEditProfileButton,
  onClickFollowListButton,
}: ProfileViewProps) => (
  <div className="p-4 w-full">
    <div className="flex justify-between pr-12">
      {profileImage ? (
        <Image
          src={profileImage}
          alt="default profile image"
          width="68"
          height="68"
        />
      ) : (
        <svg
          width="68"
          height="68"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_98_8499)">
            <path
              d="M24.5 22.1667V5.83333C24.5 4.55 23.45 3.5 22.1667 3.5H5.83333C4.55 3.5 3.5 4.55 3.5 5.83333V22.1667C3.5 23.45 4.55 24.5 5.83333 24.5H22.1667C23.45 24.5 24.5 23.45 24.5 22.1667ZM10.3833 16.31L12.8333 19.2617L16.45 14.6067C16.6833 14.3033 17.15 14.3033 17.3833 14.6183L21.4783 20.0783C21.77 20.4633 21.49 21.0117 21.0117 21.0117H7.02333C6.53333 21.0117 6.265 20.4517 6.56833 20.0667L9.47333 16.3333C9.695 16.03 10.1383 16.0183 10.3833 16.31Z"
              fill="#6B7280"
            />
          </g>
          <defs>
            <clipPath id="clip0_98_8499">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      <div className="flex justify-center items-center">
        <div className="text-center mx-4">
          <p className="text-base font-bold">{answeredQuestionCount}</p>
          <p className="text-xs font-medium">답변완료</p>
        </div>
        <div className="w-0 h-9 border border-neutral-300 border-solid"></div>
        <div className="text-center mx-4">
          <p className="text-base font-bold text-center">{followerCount}</p>
          <p className="text-xs font-medium text-center">팔로워</p>
        </div>
        <div className="w-0 h-9 border border-neutral-300 border-solid"></div>
        <div className="text-center mx-4">
          <p className="text-base font-bold">{totalQuestionCount}</p>
          <p className="text-xs font-medium">누적질문수</p>
        </div>
      </div>
    </div>
    <div className="mt-4 flex align-middle justify-between">
      <div>
        <p className="text-sm font-bold mb-2">{name}</p>
        <p className="text-xs font-medium">{description}</p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={onClickEditProfileButton}
          className="w-10 h-10 bg-gray-200 rounded-xl mr-2 flex flex-col justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.0833 7.43783L12.5417 3.93783L13.7083 2.77116C14.0278 2.45171 14.4201 2.29199 14.8854 2.29199C15.3507 2.29199 15.7431 2.45171 16.0625 2.77116L17.2292 3.93783C17.5486 4.25727 17.7153 4.64269 17.7292 5.09408C17.7431 5.54546 17.5903 5.93088 17.2708 6.25033L16.0833 7.43783ZM3.33333 17.5003C3.09722 17.5003 2.89931 17.4205 2.73958 17.2607C2.57986 17.101 2.5 16.9031 2.5 16.667V14.3128C2.5 14.2017 2.52083 14.0941 2.5625 13.9899C2.60417 13.8857 2.66667 13.792 2.75 13.7087L11.3333 5.12533L14.875 8.66699L6.29167 17.2503C6.20833 17.3337 6.11458 17.3962 6.01042 17.4378C5.90625 17.4795 5.79861 17.5003 5.6875 17.5003H3.33333Z"
              fill="#333333"
            />
          </svg>
        </button>
        <button
          onClick={onClickFollowListButton}
          className="w-10 h-10 bg-gray-200 rounded-xl flex flex-col justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="m-0"
          >
            <path
              d="M0.833496 15.833V14.333C0.833496 13.8608 0.955024 13.4268 1.19808 13.0309C1.44113 12.6351 1.76405 12.333 2.16683 12.1247C3.02794 11.6941 3.90294 11.3712 4.79183 11.1559C5.68072 10.9406 6.5835 10.833 7.50016 10.833C8.41683 10.833 9.31961 10.9406 10.2085 11.1559C11.0974 11.3712 11.9724 11.6941 12.8335 12.1247C13.2363 12.333 13.5592 12.6351 13.8022 13.0309C14.0453 13.4268 14.1668 13.8608 14.1668 14.333V15.833C14.1668 16.0691 14.087 16.267 13.9272 16.4268C13.7675 16.5865 13.5696 16.6663 13.3335 16.6663H1.66683C1.43072 16.6663 1.2328 16.5865 1.07308 16.4268C0.913357 16.267 0.833496 16.0691 0.833496 15.833ZM15.4377 16.6663C15.5627 16.5691 15.6599 16.4476 15.7293 16.3018C15.7988 16.1559 15.8335 15.9927 15.8335 15.8122V14.1663C15.8335 13.5552 15.6634 12.9684 15.3231 12.4059C14.9828 11.8434 14.5002 11.3608 13.8752 10.958C14.5835 11.0413 15.2502 11.1837 15.8752 11.3851C16.5002 11.5865 17.0835 11.833 17.6252 12.1247C18.1252 12.4025 18.5071 12.7115 18.771 13.0518C19.0349 13.392 19.1668 13.7636 19.1668 14.1663V15.833C19.1668 16.0691 19.087 16.267 18.9272 16.4268C18.7675 16.5865 18.5696 16.6663 18.3335 16.6663H15.4377ZM7.50016 9.99967C6.5835 9.99967 5.79877 9.67329 5.146 9.02051C4.49322 8.36773 4.16683 7.58301 4.16683 6.66634C4.16683 5.74967 4.49322 4.96495 5.146 4.31217C5.79877 3.6594 6.5835 3.33301 7.50016 3.33301C8.41683 3.33301 9.20155 3.6594 9.85433 4.31217C10.5071 4.96495 10.8335 5.74967 10.8335 6.66634C10.8335 7.58301 10.5071 8.36773 9.85433 9.02051C9.20155 9.67329 8.41683 9.99967 7.50016 9.99967ZM15.8335 6.66634C15.8335 7.58301 15.5071 8.36773 14.8543 9.02051C14.2016 9.67329 13.4168 9.99967 12.5002 9.99967C12.3474 9.99967 12.1529 9.98231 11.9168 9.94759C11.6807 9.91287 11.4863 9.87467 11.3335 9.83301C11.7085 9.38856 11.9967 8.89551 12.1981 8.35384C12.3995 7.81217 12.5002 7.24967 12.5002 6.66634C12.5002 6.08301 12.3995 5.52051 12.1981 4.97884C11.9967 4.43717 11.7085 3.94412 11.3335 3.49967C11.5279 3.43023 11.7224 3.38509 11.9168 3.36426C12.1113 3.34342 12.3057 3.33301 12.5002 3.33301C13.4168 3.33301 14.2016 3.6594 14.8543 4.31217C15.5071 4.96495 15.8335 5.74967 15.8335 6.66634Z"
              fill="#333333"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default ProfileView;
