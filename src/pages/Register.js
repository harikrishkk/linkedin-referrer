import { ErrorBar } from '../components/ErrorBar';
import { Loader } from '../components/Loader';
import { Notification } from '../components/Notification';
import { submitProfile } from '../utils/submit-form';
import { useForm } from 'react-hook-form';
import { useHarperDB } from 'use-harperdb';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

/* Registration page for Users */
const Register = () => {
  const [skillsetsData, skillsetLoading, skillsetError] = useHarperDB({
    query: { operation: 'sql', sql: 'select * from candidates.skillsets' },
  });
  const [experienceData, experienceLoading, experienceError] = useHarperDB({
    query: { operation: 'sql', sql: 'select * from candidates.experience' },
  });

  const [submitStatus, setSubmitStatus] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const history = useHistory();

  const onSubmit = (formData) => {
    const { expertise, profileURL, skillsets, username } = formData;
    submitProfile(username, profileURL, expertise, skillsets)
      .then((response) => {
        if (response.status === 200) {
          setSubmitStatus(true);
          setIsSubmit(true);
          setTimeout(() => {
            history.push('/');
          }, 2000);
        }
      })
      .catch((err) => {
        setSubmitStatus(false);
        setIsSubmit(true);
      });

    reset();
  };

  if (skillsetLoading || experienceLoading) {
    return <Loader />;
  }

  if (skillsetError || experienceError) {
    return <ErrorBar message="Error in loading skillsets.." />;
  }
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Register your profile.
        </h2>

        {isSubmit && <Notification notification={submitStatus} />}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* User Name input */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name *</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                {...register('username', { required: true })}
              />
              {errors?.username?.type === 'required' && (
                <label className="label">
                  <span className="antialiased text-red-700 label-text-alt">
                    Username is required.
                  </span>
                </label>
              )}
            </div>
            {/* Linkedin Profile  input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn Profile Link *</span>
              </label>
              <input
                type="text"
                placeholder="Your LinkedIn Profile link"
                className="input input-bordered"
                {...register('profileURL', { required: true })}
              />
              {errors?.profileURL?.type === 'required' && (
                <label className="label">
                  <span className="antialiased text-red-700 label-text-alt">
                    Linkedin Profile URL is required.
                  </span>
                </label>
              )}
            </div>
            {/* Experience input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Experience Level *</span>
              </label>
              {errors?.expertise?.type === 'required' && (
                <label className="label">
                  <span className="antialiased text-red-700 label-text-alt">
                    One expertise level is mandatory
                  </span>
                </label>
              )}
              {experienceData &&
                experienceData.map((exp, i) => {
                  return (
                    <label key={i} className="cursor-pointer label">
                      <span className="label-text"> {exp.experience} </span>
                      <div>
                        <input
                          type="radio"
                          name="opt"
                          className="radio"
                          value={exp.experienceValue}
                          {...register('expertise', { required: true })}
                        />
                        <span className="radio-mark"></span>
                      </div>
                    </label>
                  );
                })}
            </div>
            {/* Skillsets input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Area of Expertise *</span>
              </label>
              {errors?.skillsets?.type === 'required' && (
                <label className="label">
                  <span className="antialiased text-red-700 label-text-alt">
                    Atleast one skillset is required.
                  </span>
                </label>
              )}
              {skillsetsData &&
                skillsetsData.map((skill, i) => {
                  return (
                    <label key={i} className="cursor-pointer label">
                      <span className="label-text">{skill.skillset}</span>
                      <div>
                        <input
                          {...register('skillsets', { required: true })}
                          type="checkbox"
                          className="checkbox"
                          value={skill.skillset}
                        />
                        <span className="checkbox-mark"></span>
                      </div>
                    </label>
                  );
                })}
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button type="submit" className="btn btn-block md:w-auto">
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
