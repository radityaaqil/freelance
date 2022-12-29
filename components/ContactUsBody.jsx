import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const ContactUsBody = () => {
  //Disabled Button
  const [disabled, setDisabled] = useState(false);

  //Input Border Color
  const [focusColor, setFocusColor] = useState(false);

  const onFocus = () => {
    setFocusColor(true);
  };

  const onBlur = () => {
    setFocusColor(false);
  };

  //Form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      brief: "",
    },
    //Validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must contain 50 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      brief: Yup.string()
        .max(300, "Must contain 300 characters or less")
        .required("Required"),
    }),
    //Submit
    onSubmit: async (values) => {
      try {
        setDisabled(true);
      } catch (error) {
        console.log(error);
      } finally {
        setDisabled(false);
      }
    },
  });

  return (
    <div className="font-ubuntu text-white md:px-28 lg:px-44">
      <div className="px-12 text-4xl font-bold text-[#3c0c3e]/90">
        Contact Us
      </div>
      <div className="mt-4 bg-[#3c0c3e]/90 w-full px-12 rounded-md md:pb-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="md:hidden pt-6">
            <div>Name</div>
            <input
              className="w-full rounded-md outline-none focus:ring-2 focus:ring-[#3c0c3e] px-2 text-[#3c0c3e]/90"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-sm text-red-500 pt-1">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="mt-4 md:hidden">
            <div>Email</div>
            <input
              className="w-full rounded-md outline-none focus:ring-2 focus:ring-[#3c0c3e] px-2 text-[#3c0c3e]/90"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mt-4 md:hidden">
            <div>Brief</div>
            <textarea
              className="w-full rounded-md outline-none h-32 resize-none focus:ring-2 focus:ring-[#3c0c3e] px-2 text-[#3c0c3e]/90"
              name="brief"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brief}
            />
            {formik.touched.brief && formik.errors.brief ? (
              <p className="text-sm text-red-500 pt-1">{formik.errors.brief}</p>
            ) : null}
          </div>
          <div className="flex justify-end md:hidden">
            <button
              className="mt-6 px-4 py-2 bg-white rounded-md text-[#3c0c3e] font-bold hover:bg-[#3c0c3e] hover:text-white duration-700 hover:ring-2 hover:ring-white"
              disabled={disabled}
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="md:hidden pb-14 pt-8">
            <div className="mt-4 text-2xl font-bold">
              Let us be your digital partner
            </div>
            <div className="mt-3 text-xl font-bold">
              Reach your KPIs with us!
            </div>
            <div className="mt-3 text-base text-justify">
              PT SOLUSI BERT INDONESIA LEGALO, 18 Office Park Lt. 10 Unit A Jl.
              T.B. Simatupang No. 18 Kebagusan - Pasar Minggu Jakarta Selatan,
              12550
            </div>
          </div>

          {/* Large Screen */}
          <div className=" hidden md:flex">
            <div className="w-3/5 pt-6">
              <div>
                <div className="md:flex gap-x-3 justify-between mt-2">
                  <div className="w-1/2">
                    <div>Name</div>
                    <input
                      className="w-full text-[#3c0c3e] rounded-md outline-none focus:ring-2 focus:ring-[#3c0c3e] px-2"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <p className="text-sm text-red-500 pt-1">
                        {formik.errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-1/2">
                    <div>Email</div>
                    <input
                      className="w-full text-[#3c0c3e] rounded-md outline-none focus:ring-2 focus:ring-[#3c0c3e] px-2"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="text-sm text-red-500">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div>Brief</div>
                <textarea
                  className="w-full text-[#3c0c3e] rounded-md outline-none h-32 resize-none focus:ring-2 focus:ring-[#3c0c3e] px-2"
                  name="brief"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.brief}
                />
                {formik.touched.brief && formik.errors.brief ? (
                  <p className="text-sm text-red-500 pt-1">
                    {formik.errors.brief}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-end">
                <button
                  className="mt-6 px-4 py-2 bg-white rounded-md text-[#3c0c3e] font-bold hover:bg-[#3c0c3e] hover:text-white duration-700 hover:ring-2 hover:ring-white"
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="w-2/5 ml-8">
              <div className="mt-6 text-xl lg:text-3xl font-bold">
                Let us be your digital partner
              </div>
              <div className="mt-3 text-lg lg:text-2xl font-bold">
                Reach your KPIs with us!
              </div>
              <div className="mt-3 text-sm lg:text-base text-justify">
                PT SOLUSI BERT INDONESIA LEGALO, 18 Office Park Lt. 10 Unit A
                Jl. T.B. Simatupang No. 18 Kebagusan - Pasar Minggu Jakarta
                Selatan, 12550
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsBody;
