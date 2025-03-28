import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <div className="top-strip py-2 border-b-[1px] border-t-[1px] border-gray-250">
        <div className="container">
          <div className=" flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text">
                Get up to 50% off new season style, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none link transition-all">
                  <Link to="help-center">Help Center</Link>
                </li>
                <li className="list-none link transition-all">
                  <Link to="order-tracking">Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
