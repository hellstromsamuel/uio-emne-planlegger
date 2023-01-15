import { Button, Chip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FC } from "react";
import CourseEvent from "../../uio-api/interfaces/CourseEvent";

interface DialogCalendarEventProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  courseEvent: CourseEvent;
}

export const DialogCalendarEvent: FC<DialogCalendarEventProps> = ({
  open,
  setOpen,
  courseEvent,
}) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "25px" }}>
        {courseEvent.activityTitle}
      </DialogTitle>
      <DialogContent>
        <Chip
          sx={{
            marginTop: "10px",
            marginBottom: "20px",
            backgroundColor: courseEvent.colorCode,
            fontSize: "15px",
            padding: "10px",
          }}
          label={courseEvent.courseCode}
        ></Chip>
        <div className="CalenderEventDiv">
          <p>
            {courseEvent.dtStart.split("T")[1].slice(0, 5) +
              " - " +
              courseEvent.dtEnd.split("T")[1].slice(0, 5)}
          </p>
          {courseEvent.rooms && (
            <div>
              <p>
                Rom:{" "}
                <a href={courseEvent.rooms[0].roomUrl}>
                  {courseEvent.rooms[0].roomName}
                </a>
              </p>
              <p>
                Bygning:{" "}
                <a href={courseEvent.rooms[0].buildingUrl}>
                  {courseEvent.rooms[0].buildingName}
                </a>
              </p>
            </div>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Lukk</Button>
      </DialogActions>
    </Dialog>
  );
};
