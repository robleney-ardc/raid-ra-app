import { CurrentUserInterface } from "@/types";
import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useKeycloak } from "@react-keycloak/web";

export default function CurrentUser({
  currentUser,
}: {
  currentUser: CurrentUserInterface;
}) {
  const { clientId, role } = currentUser;
  const { keycloak } = useKeycloak();
  return (
    <Card
      data-testid="signed-in-user"
      sx={{ borderLeft: "solid", borderLeftColor: "primary.main" }}
    >
      <CardHeader title="Signed-in user" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <Typography variant="body2">Identity</Typography>
              <Typography color="text.secondary" variant="body1">
                {keycloak.tokenParsed?.sub}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Box>
              <Typography variant="body2">Client</Typography>
              <Typography color="text.secondary" variant="body1">
                {clientId}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <Typography variant="body2">Service point</Typography>
              <Typography color="text.secondary" variant="body1">
                {keycloak.tokenParsed?.service_point_group_id}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Box>
              <Typography variant="body2">Role</Typography>
              <Typography color="text.secondary" variant="body1">
                {role}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
