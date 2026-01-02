import React from 'react';
import { BeatLoader, MoonLoader } from 'react-spinners';

const loading = () => {
    return (
      <div className="min-h-screen mx-auto flex-col flex justify-center items-center">
        <MoonLoader color="#DDB897" />
        <h1 className="pt-5 flex text-primary gap-1 items-center animate-ping">
          Please wait <BeatLoader color="#DDB897" size={5} />
        </h1>
      </div>
    );
};

export default loading;